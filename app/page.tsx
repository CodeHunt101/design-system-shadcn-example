"use client"

import { ThemeToggle } from "@/components/ui-custom/theme-toggle"
import { Button } from "@/components/ui-custom/button"
import { Input } from "@/components/ui-custom/input"
import { Badge } from "@/components/ui-custom/badge"
import { SimpleCard, HorizontalCard } from "@/components/ui-custom/card"
import { NavMenu, Breadcrumb, Tabs } from "@/components/ui-custom/navigation"
import { ArrowRight, Check, ChevronRight, Mail, Search, Settings, User } from "lucide-react"
import { Home as HomeIcon } from "@/components/ui-custom/home-icon"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("buttons")

  const navItems = [
    { label: "Home", href: "#", active: true },
    { label: "Components", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "GitHub", href: "#" },
  ]

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Components", href: "#" },
    { label: "Design System", active: true },
  ]

  const tabItems = [
    { label: "Buttons", value: "buttons", icon: <Settings className="h-4 w-4" /> },
    { label: "Inputs", value: "inputs", icon: <Mail className="h-4 w-4" /> },
    { label: "Cards", value: "cards", icon: <User className="h-4 w-4" /> },
    { label: "Badges", value: "badges" },
    { label: "Navigation", value: "navigation", icon: <HomeIcon className="h-4 w-4" /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold">Design System</h1>
            <NavMenu items={navItems} />
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container py-10">
        <div className="mb-10 space-y-4">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-4xl font-bold">Custom Design System</h1>
          <p className="text-xl text-muted-foreground">A showcase of custom components built on top of shadcn/ui</p>
        </div>

        <div className="mb-8">
          <Tabs variant="pills" items={tabItems} value={activeTab} onValueChange={setActiveTab} className="mb-8" />

          {activeTab === "buttons" && (
            <section className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Button Variants</h2>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Button Sizes</h2>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Button Roundness</h2>
                <div className="flex flex-wrap gap-4">
                  <Button rounded="none">Square</Button>
                  <Button rounded="sm">Small Radius</Button>
                  <Button rounded="md">Medium Radius</Button>
                  <Button rounded="lg">Large Radius</Button>
                  <Button rounded="full">Full Radius</Button>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Button with Icons</h2>
                <div className="flex flex-wrap gap-4">
                  <Button leftIcon={<Mail className="h-4 w-4" />}>Email</Button>
                  <Button rightIcon={<ArrowRight className="h-4 w-4" />}>Next</Button>
                  <Button variant="success" leftIcon={<Check className="h-4 w-4" />}>
                    Completed
                  </Button>
                  <Button isLoading>Loading</Button>
                </div>
              </div>
            </section>
          )}

          {activeTab === "inputs" && (
            <section className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Input Variants</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input variant="default" placeholder="Default input" />
                  <Input variant="filled" placeholder="Filled input" />
                  <Input variant="flushed" placeholder="Flushed input" />
                  <Input variant="outline" placeholder="Outline input" />
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Input Sizes</h2>
                <div className="grid gap-4">
                  <Input size="sm" placeholder="Small input" />
                  <Input size="md" placeholder="Medium input" />
                  <Input size="lg" placeholder="Large input" />
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Input Roundness</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input rounded="none" placeholder="Square input" />
                  <Input rounded="sm" placeholder="Small radius input" />
                  <Input rounded="md" placeholder="Medium radius input" />
                  <Input rounded="lg" placeholder="Large radius input" />
                  <Input rounded="full" placeholder="Full radius input" />
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Input States</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input placeholder="Default state" />
                  <Input state="error" placeholder="Error state" />
                  <Input state="success" placeholder="Success state" />
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Input with Elements</h2>
                <div className="grid gap-4">
                  <Input leftElement={<Search className="h-4 w-4" />} placeholder="Search..." />
                  <Input rightElement={<Mail className="h-4 w-4" />} placeholder="Email address" />
                  <Input
                    leftElement={<User className="h-4 w-4" />}
                    rightElement={<Check className="h-4 w-4 text-green-500" />}
                    placeholder="Username"
                  />
                </div>
              </div>
            </section>
          )}

          {activeTab === "cards" && (
            <section className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Card Variants</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <SimpleCard title="Default Card" description="This is a default card component">
                    <p>Card content goes here</p>
                  </SimpleCard>

                  <SimpleCard variant="outline" title="Outline Card" description="Card with outline style">
                    <p>Card content goes here</p>
                  </SimpleCard>

                  <SimpleCard variant="filled" title="Filled Card" description="Card with filled background">
                    <p>Card content goes here</p>
                  </SimpleCard>

                  <SimpleCard variant="elevated" title="Elevated Card" description="Card with elevated shadow">
                    <p>Card content goes here</p>
                  </SimpleCard>

                  <SimpleCard variant="ghost" title="Ghost Card" description="Card with ghost style">
                    <p>Card content goes here</p>
                  </SimpleCard>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Card Sizes</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <SimpleCard size="sm" title="Small Card" description="Card with small padding">
                    <p>Card content goes here</p>
                  </SimpleCard>

                  <SimpleCard size="md" title="Medium Card" description="Card with medium padding">
                    <p>Card content goes here</p>
                  </SimpleCard>

                  <SimpleCard size="lg" title="Large Card" description="Card with large padding">
                    <p>Card content goes here</p>
                  </SimpleCard>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Interactive Cards</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <SimpleCard interactive={true} title="Interactive Card" description="Hover to see the effect">
                    <p>This card has hover effects</p>
                  </SimpleCard>

                  <SimpleCard
                    interactive={true}
                    variant="outline"
                    title="Interactive Outline"
                    description="Hover to see the effect"
                  >
                    <p>This card has hover effects</p>
                  </SimpleCard>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Horizontal Card Layout</h2>
                <HorizontalCard
                  title="Horizontal Card"
                  description="Card with horizontal layout"
                  media={
                    <div className="h-full w-full bg-muted">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Placeholder"
                        width={300}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  }
                >
                  <p>This card has a horizontal layout with media on the left side.</p>
                </HorizontalCard>
              </div>
            </section>
          )}

          {activeTab === "badges" && (
            <section className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Badge Variants</h2>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Badge Sizes</h2>
                <div className="flex flex-wrap items-center gap-4">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Badge Shapes</h2>
                <div className="flex flex-wrap gap-4">
                  <Badge rounded="sm">Square-ish</Badge>
                  <Badge rounded="md">Medium Radius</Badge>
                  <Badge rounded="lg">Large Radius</Badge>
                  <Badge rounded="full">Pill</Badge>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Badge with Icons</h2>
                <div className="flex flex-wrap gap-4">
                  <Badge leftIcon={<Check className="h-3 w-3" />}>Verified</Badge>
                  <Badge rightIcon={<ChevronRight className="h-3 w-3" />}>View more</Badge>
                  <Badge
                    variant="success"
                    leftIcon={<Check className="h-3 w-3" />}
                    rightIcon={<ChevronRight className="h-3 w-3" />}
                  >
                    Completed
                  </Badge>
                </div>
              </div>
            </section>
          )}

          {activeTab === "navigation" && (
            <section className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Navigation Menu Variants</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Horizontal Menu</h3>
                    <NavMenu
                      variant="horizontal"
                      items={[
                        { label: "Home", href: "#", active: true },
                        { label: "Products", href: "#" },
                        { label: "Pricing", href: "#" },
                        { label: "About", href: "#" },
                      ]}
                    />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Vertical Menu</h3>
                    <NavMenu
                      variant="vertical"
                      items={[
                        { label: "Dashboard", href: "#", icon: <HomeIcon className="h-4 w-4" /> },
                        { label: "Settings", href: "#", icon: <Settings className="h-4 w-4" /> },
                        { label: "Messages", href: "#", active: true, icon: <Mail className="h-4 w-4" /> },
                        { label: "Profile", href: "#", icon: <User className="h-4 w-4" /> },
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Breadcrumb Variants</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Chevron Separator</h3>
                    <Breadcrumb separator="chevron" items={breadcrumbItems} />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Slash Separator</h3>
                    <Breadcrumb separator="slash" items={breadcrumbItems} />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Dot Separator</h3>
                    <Breadcrumb separator="dot" items={breadcrumbItems} />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Tab Variants</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Default Tabs</h3>
                    <Tabs
                      variant="default"
                      items={tabItems.slice(0, 3)}
                      value={tabItems[0].value}
                      onValueChange={() => {}}
                    />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Pills Tabs</h3>
                    <Tabs
                      variant="pills"
                      items={tabItems.slice(0, 3)}
                      value={tabItems[0].value}
                      onValueChange={() => {}}
                    />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Underline Tabs</h3>
                    <Tabs
                      variant="underline"
                      items={tabItems.slice(0, 3)}
                      value={tabItems[0].value}
                      onValueChange={() => {}}
                    />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Enclosed Tabs</h3>
                    <Tabs
                      variant="enclosed"
                      items={tabItems.slice(0, 3)}
                      value={tabItems[0].value}
                      onValueChange={() => {}}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Custom Design System built with shadcn/ui</p>
          <NavMenu
            items={[
              { label: "GitHub", href: "#" },
              { label: "Twitter", href: "#" },
              { label: "Discord", href: "#" },
            ]}
            size="sm"
            spacing="tight"
          />
        </div>
      </footer>
    </div>
  )
}
